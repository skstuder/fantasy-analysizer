import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav></nav>`;
});
const normalize = "";
const app = "";
const base = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".stripe.svelte-1i6t56c{background-image:linear-gradient(#aa4153 20%, #4b698d 20%, 80%, #2a678e 80%);position:fixed;width:100%;height:250px;z-index:0;transform:rotate(25deg) scaleX(1.5) translateY(-5em);z-index:0;top:50px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="${"app px-3 layout"}"><main>${slots.default ? slots.default({}) : ``}</main>

	</div>
<div class="${"z-0 stripe svelte-1i6t56c"}"></div>`;
});
export {
  Layout as default
};
