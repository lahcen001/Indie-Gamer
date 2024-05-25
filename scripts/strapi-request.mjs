import {writeFileSync} from "node:fs";
import qs from "qs";


const url = "http://localhost:1337/api/reviews" +'?'+ qs.stringify({
    fields : ["title",  "slug","subtitle"],
    populate : { image : { fields : ["url"] } },
    pagination : { pageSize : 6},
}, {econdeValuesOnly: true});
const response = await fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
});
const data = await response.json();
const json = JSON.stringify(data, null, 2);
console.log(json)
writeFileSync("./scripts/reviews.json", json, "utf-8")
