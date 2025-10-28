class gclnk{
    constructor(){
        this.api = "https://api.gclnk.com"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async short_url(url){
        let req=await fetch(`${this.api}/links`,{method:"POST",headers: this.headers,body:JSON.stringify({"url":url})});
        return req.json();
    }
}
module.exports = {gclnk};