import { getPlatformProxy } from "wrangler";
const req = new Request("https://dummy.domain/", {
	method: "POST",
	body: "HelloWorld"
});
if(!req.body) {
	throw "a fit";
}

const proxy = await getPlatformProxy();
await proxy.env.R2.put("key", req.body);