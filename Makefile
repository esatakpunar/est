# est - Build System
# Requires: npx (comes with npm)

.PHONY: dist css js clean size publish docs

CSS_FILES = src/css/00-base.css \
            src/css/01-theme.css \
            src/css/animations.css \
            src/css/avatar.css \
            src/css/button.css \
            src/css/form.css \
            src/css/table.css \
            src/css/progress.css \
            src/css/spinner.css \
            src/css/grid.css \
            src/css/card.css \
            src/css/alert.css \
            src/css/badge.css \
            src/css/accordion.css \
            src/css/tabs.css \
            src/css/dialog.css \
            src/css/dropdown.css \
            src/css/toast.css \
            src/css/sidebar.css \
            src/css/skeleton.css \
            src/css/tooltip.css \
            src/css/utilities.css

dist: css js size

css:
	@mkdir -p dist
	@cat $(CSS_FILES) > dist/est.css
	@npx esbuild dist/est.css --minify --outfile=dist/est.min.css
	@gzip -9 -k -f dist/est.min.css
	@echo "CSS: $$(wc -c < dist/est.min.css | tr -d ' ') bytes (minified)"

js:
	@mkdir -p dist
	@npx esbuild src/js/index.js --bundle --format=iife --outfile=dist/est.js
	@npx esbuild src/js/index.js --bundle --format=iife --minify --outfile=dist/est.min.js
	@gzip -9 -k -f dist/est.min.js
	@echo "JS: $$(wc -c < dist/est.min.js | tr -d ' ') bytes (minified)"

clean:
	@rm -rf dist

size:
	@echo ""
	@echo "Bundle:"
	@echo "CSS (src):   $$(wc -c < dist/est.css | tr -d ' ') bytes"
	@echo "CSS (min):   $$(wc -c < dist/est.min.css | tr -d ' ') bytes"
	@echo "CSS (gzip):  $$(wc -c < dist/est.min.css.gz | tr -d ' ') bytes"
	@echo ""
	@echo "JS (src):    $$(wc -c < dist/est.js | tr -d ' ') bytes"
	@echo "JS (min):    $$(wc -c < dist/est.min.js | tr -d ' ') bytes"
	@echo "JS (gzip):   $$(wc -c < dist/est.min.js.gz | tr -d ' ') bytes"
	@echo ""
	@echo "Total (gzip): $$(( $$(wc -c < dist/est.min.css.gz | tr -d ' ') + $$(wc -c < dist/est.min.js.gz | tr -d ' ') )) bytes"

# Prepare the publish directory and run npm publish from it.
# Run 'make dist' first, then 'make publish'.
publish: dist
	@rm -rf publish
	@mkdir -p publish/css publish/js
	@cp dist/est.min.css publish/est.min.css
	@cp dist/est.min.js publish/est.min.js
	@cp dist/est.css publish/est.css
	@cp dist/est.js publish/est.js
	@cp -r src/css publish/css
	@cp -r src/js publish/js
	@cp README.md publish/README.md 2>/dev/null || true
	@VERSION=$$(node -p "require('./package.json').version") && \
		cat package.json | sed "s/\"version\": \"[^\"]*\"/\"version\": \"$$VERSION\"/" > publish/package.json
	@echo "Ready to publish. Run: cd publish && npm publish --access public"
