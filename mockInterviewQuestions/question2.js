// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

function domainName(domainlink) {
    let name = domainlink.replace("http://", "")
        .replace("https://", "")
        .replace("com", "")
        .replace("www.", "")
    let end0fDomain = name.indexOf(".")
    name = name.substring(0, end0fDomain)
    return name
}

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com")) 
