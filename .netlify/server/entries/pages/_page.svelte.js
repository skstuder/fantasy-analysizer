import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../chunks/index.js";
const HandicapInput_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "input.svelte-14ibjye{width:50px;height:30%;background:white;border:gray;border-style:solid;border-width:3px;border-radius:5px;font-weight:bold;color:#222}",
  map: null
};
const HandicapInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handicap = "" } = $$props;
  let { hasInvalidSelection = false } = $$props;
  if ($$props.handicap === void 0 && $$bindings.handicap && handicap !== void 0)
    $$bindings.handicap(handicap);
  if ($$props.hasInvalidSelection === void 0 && $$bindings.hasInvalidSelection && hasInvalidSelection !== void 0)
    $$bindings.hasInvalidSelection(hasInvalidSelection);
  $$result.css.add(css$3);
  return `<div class="${"mb-3"}"><div>${``}</div>
	<div class="${"flex items-baseline"}"><label class="${"mr-3"}" for="${"handicap"}">Riders Handicap</label>
		<input id="${"handicap"}" class="${"svelte-14ibjye"}"${add_attribute("value", handicap, 0)}></div>
</div>`;
});
const PointPotientals_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "table.svelte-1ff6xc1{table-layout:auto}tr.svelte-1ff6xc1{background:#2a2a44}tr.svelte-1ff6xc1:nth-child(even){background:#3b3b52}table.svelte-1ff6xc1{background:#2a2a44}",
  map: null
};
function getOrdinal(n) {
  let ord = "th";
  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }
  return ord;
}
const PointPotientals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handicap = "" } = $$props;
  let { isAllStar = false } = $$props;
  let convertedPositions = {};
  let positions = {
    1: 26,
    2: 23,
    3: 21,
    4: 19,
    5: 18,
    6: 17,
    7: 16,
    8: 15,
    9: 14,
    10: 13,
    11: 12,
    12: 11,
    13: 10,
    14: 9,
    15: 8,
    16: 7,
    17: 6,
    18: 5,
    19: 4,
    20: 3,
    21: 2,
    22: 1
  };
  function calculatePoints() {
    if (handicap) {
      convertedPositions = Object.assign({}, positions);
      let i = 0;
      for (const value in convertedPositions) {
        i++;
        if (i - parseInt(handicap) < 1 && !isAllStar) {
          convertedPositions[value] = 26 * 2;
        } else if (i - parseInt(handicap) < 1 && isAllStar) {
          convertedPositions[value] = 26;
        } else {
          for (const key in positions) {
            if (i - parseInt(handicap) === parseInt(key)) {
              convertedPositions[value] = positions[key];
              if (!isAllStar && i - parseInt(handicap) < 11) {
                convertedPositions[value] = convertedPositions[value] * 2;
              }
            }
          }
        }
      }
    }
  }
  if ($$props.handicap === void 0 && $$bindings.handicap && handicap !== void 0)
    $$bindings.handicap(handicap);
  if ($$props.isAllStar === void 0 && $$bindings.isAllStar && isAllStar !== void 0)
    $$bindings.isAllStar(isAllStar);
  $$result.css.add(css$2);
  {
    {
      calculatePoints();
    }
  }
  {
    {
      calculatePoints();
    }
  }
  return `<div class="${"flex justify-center"}"><table class="${"table-auto py-3 shadow-2xl svelte-1ff6xc1"}"><div><thead><tr class="${"svelte-1ff6xc1"}"><th>POS </th>
					<th>Points </th></tr></thead>
			<tbody class="${"bg-white "}">${each(Object.entries(convertedPositions), ([position, points]) => {
    return `
					<tr class="${"even:dark-purp odd:light-purp svelte-1ff6xc1"}">
						<td class="${"border-b border-slate-100 dark:border-slate-700 px-20 text-slate-500 dark:text-slate-400"}">${escape(position + getOrdinal(position))}</td>
						<td class="${"border-b border-slate-100 dark:border-slate-700 px-20 text-slate-500 dark:text-slate-400"}">${escape(points)}</td>
						
					</tr>`;
  })}</tbody></div>
		</table>
</div>`;
});
const AllstarCheckbox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "input[type='checkbox'].svelte-1bjgcmx{position:relative;width:50px;height:25px;-webkit-appearance:none;background:#c6c6c6;outline:none;border-radius:20px;box-shadow:inset 0 0 5px rgba(255, 0, 0, 0.2);transition:0.7s}input:checked[type='checkbox'].svelte-1bjgcmx{background:green}input[type='checkbox'].svelte-1bjgcmx:before{content:'';position:absolute;width:17px;height:17px;border-radius:20px;top:0;left:0;background:#ffffff;transform:scale(1.1);box-shadow:0 2px 5px rgba(0, 0, 0, 0.2);transition:0.5s}input:checked[type='checkbox'].svelte-1bjgcmx:before{left:25px}",
  map: null
};
const AllstarCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAllStar = false } = $$props;
  if ($$props.isAllStar === void 0 && $$bindings.isAllStar && isAllStar !== void 0)
    $$bindings.isAllStar(isAllStar);
  $$result.css.add(css$1);
  return `<div class="${"flex justify-baseline"}"><label class="${"mr-3"}" for="${"handicap"}">Allstar?</label>
	<input type="${"checkbox"}" class="${"svelte-1bjgcmx"}"${add_attribute("checked", isAllStar, 1)}>
</div>`;
});
const mathless = "/_app/immutable/assets/steve-confused-smaller-3af3cdf6.gif";
const NoResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><img${add_attribute("src", mathless, 0)} alt="${"steve matthes wandering around confused"}"></div>`;
});
const InfoArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handicap = "" } = $$props;
  let { isAllStar = false } = $$props;
  if ($$props.handicap === void 0 && $$bindings.handicap && handicap !== void 0)
    $$bindings.handicap(handicap);
  if ($$props.isAllStar === void 0 && $$bindings.isAllStar && isAllStar !== void 0)
    $$bindings.isAllStar(isAllStar);
  return `<div>${isAllStar ? `<h5>You are viewing points possibilites for a
			<b>${escape(handicap)}</b> handicap
			<b>ALLSTAR</b></h5>` : `<h5>You are viewing points possibilites for a
			<b>${escape(handicap)}</b> handicap
			<b>NON-ALLSTAR</b></h5>`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input-section.svelte-16vs8c6{background:#3b3b52}.dark-purp.svelte-16vs8c6{background:#2a2a44}",
  map: null
};
function checkHandicap(handicap) {
  return parseInt(handicap) >= -2 && parseInt(handicap) < 17;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let validHandicap;
  let handicap;
  let isAllStar = false;
  let hasInvalidSelection = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    validHandicap = checkHandicap(handicap);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-t32ptj_END -->`, ""}

<div class="${"flex justify-center"}"><div class="${"z-10 relative"}"><h1 class="${"uppercase"}">Rider Point Potentials</h1>
		${!validHandicap || hasInvalidSelection ? `<h5>Steve can&#39;t find your handicap, enter a handicap and allstar status</h5>` : `${validate_component(InfoArea, "InfoArea").$$render($$result, { isAllStar, handicap }, {}, {})}`}
		<div class="${"md:flex"}"><section class="${"p-5 input-section md:h-72 mt-5 dark-purp rounded-md shadow-2xl svelte-16vs8c6"}">${validate_component(HandicapInput, "HandicapInput").$$render(
      $$result,
      { handicap, hasInvalidSelection },
      {
        handicap: ($$value) => {
          handicap = $$value;
          $$settled = false;
        },
        hasInvalidSelection: ($$value) => {
          hasInvalidSelection = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${validate_component(AllstarCheckbox, "AllstarCheckbox").$$render(
      $$result,
      { class: "pb-5", isAllStar },
      {
        isAllStar: ($$value) => {
          isAllStar = $$value;
          $$settled = false;
        }
      },
      {}
    )}</section>
			<div class="${"md:ml-5 mt-5"}">${!validHandicap || hasInvalidSelection ? `${validate_component(NoResults, "NoResults").$$render($$result, {}, {}, {})}` : `${validate_component(PointPotientals, "PointPotientals").$$render($$result, { isAllStar, handicap }, {}, {})}`}</div>
			</div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
