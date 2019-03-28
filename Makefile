node = node
gen-feature-test = node ./features/gen-feature-test.js
hexdump-to-json = node ./node_modules/.bin/hexdump-to-json
wat2wasm = wat2wasm
features = $(shell find ./features/* -type d)

define build_feature
	$(wat2wasm) \
		--enable-multi-value \
		"$(1)/module.wast" -o "$(1)/module.wasm"
	hexdump -C "$(1)/module.wasm" \
		| $(hexdump-to-json) \
		| $(gen-feature-test) $(1) >> lib/index.js
endef

build:
	mkdir -p ./lib
	echo "// DO NOT EDIT" > lib/index.js
	echo "// generated by: make build" >> lib/index.js
	$(foreach dir,$(features),$(call build_feature,$(dir));)

test:
	$(node) --no-experimental-wasm-mv test.js multi-value 0
	$(node) --experimental-wasm-mv test.js multi-value 1
	$(node) --no-experimental-wasm-mut-global test.js mutable-global 0
	$(node) --experimental-wasm-mut-global test.js mutable-global 1
