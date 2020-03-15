/* Proxy Design Pattern
 *
 * Javascript implementation
 *
*/

//Enum in Javascript for Socials
const SOCIALS = Object.freeze({
  TWITTER: "Twitter",
  LINKEDIN: "Linkedin",
  FACEBOOK: "Facebook",
  INSTAGRAM: "Instagram",
  GITHUB: "Github",
  DEVTO: "Devto"
});

// SOCIALS API
class SocialsAPI {
  constructor() {
    this.getFollowers = (platform) => {
      switch (platform) {
        case SOCIALS.TWITTER:
          return 5841;
        case SOCIALS.LINKEDIN:
          return 2701;
        case SOCIALS.GITHUB:
          return 184;
        case SOCIALS.DEVTO:
          return 275;
        case SOCIALS.FACEBOOK:
          return 255;
        case SOCIALS.INSTAGRAM:
          return 43;
        default:
          return "UNKNOW SOCIAL"
      }
    }
  }
}

// SOCIALS PROXY
class SocialsProxy {
  constructor() {

    this.api = new SocialsAPI(); //Api to fetch when not available in cache
    this.cache = {}; //To store the follower locally, and dont fetch api again

    this.getFollowers = (platform) => {
      if (this.cache[platform] != null) {
        console.log(`Cached for ${platform} : ${this.cache[platform]} `);
      } else {
        this.cache[platform] = this.api.getFollowers(platform);
        console.log(`API fetched for ${platform} : ${this.cache[platform]} now stored in cache`);
      }
      return this.cache[platform];
    }
  }
}

//MAIN
const socialProxy = new SocialsProxy();

socialProxy.getFollowers(SOCIALS.TWITTER); //Socials API fetched for Twitter : 5841. Now stored in cache
socialProxy.getFollowers(SOCIALS.DEVTO); //Socials API fetched for Devto : 275. Now stored in cache
socialProxy.getFollowers(SOCIALS.LINKEDIN); //Socials API fetched for Linkedin : 2701. Now stored in cache
socialProxy.getFollowers(SOCIALS.GITHUB); //Socials API fetched for Github : 184. Now stored in cache

socialProxy.getFollowers(SOCIALS.DEVTO); //Cached for Devto : 275
socialProxy.getFollowers(SOCIALS.TWITTER); //Cached for Twitter : 5841

//Current Proxy cache
console.log(socialProxy.cache); //{ Twitter: 5841, Linkedin: 2701, Github: 184, Devto: 275 }
