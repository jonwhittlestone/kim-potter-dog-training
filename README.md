# kim-potter-dog-training

> Kim Potter Dog Training - Dedicated to dogs

To carry on building on dev with nuxt

    npm run dev

## Next Steps
```
    [ ] Nuxt static site build - mirror from yell.com
        [x] Mobile homepage - Mobile-first markup / styles / behaviour / separate header components
        [ ] Form, footer components
        [ ] Mobile content page - markup / styles / behaviour
            [ ] Nuxt-ify content pages
                [x] About Me
                [x] Dog Training
                [x] Loveable Rogues Gallery
                    [x]  Lightbox Component
                [x] Testimonials
                [x] Contact
    [x] Link to other pages
    [x] Scroll 'to top' icon
    [x] Repeat mobile-first for Desktop
    [x] paw Backgrounds for Desktop
    [x] Nav active class on header and footer
    [x] Close mobile menu when clicked
    [x] Social sharing icons - styling/linking through
    [ ] Official Docs/Tutorial showing Google Business Review Content - tinyurl.com/yxn6nvb7
    [ ] SEO markup
        [x] Titles and Meta 
        [x] Favicon
            * Generated at https://realfavicongenerator.net
        [x] Canonical links with i18nSeo ?
        [ ] Sitemap with `exclude[]`
        [ ] Alt tags

    [x]  Deploy staging to kpdt-staging.howapped.com with nginx password. (or nuxt auth module with local auth)
    [x] Holding page with contact details and image: kpdt.howapped.com
    for a week after Kim disengages with Yell
    [x] Serverless contact form on holding page
    [ ] Contact form with Netlify serverless function with Thank-you msg
        * https://dev.to/jennapederson/sending-email-with-netlify-functions-2e3h
    [x] GDPR cookie accept
        - https://evodiaaut.github.io/vue-cookieconsent-component/
        - Full developmint GDPR commit - ac74b0537447bc35f4c4a0ffaa7c862a067fbc62
    [-] GA nuxt module: `@nuxtjs/google-analytics`
    [x] Privacy Policy
    [x] Remove final contact details frame of video
    [x] Add Call to Action for 'View GMB Reviews' on footer (GMB sign in to get short url)
    [x] BUG [CSS] banner images backgrounds are bg-scroll when should be fixed
    [x] BUG [CSS] sm/mobile view > contact page > form > margin-top is too big
    [x] BUG 'popupWindow is null' when revisiting site after the social share popup thingy - this was bc I tried it on local
    [x] Questions for Kim
        [x] Remove contact company info (VAT etc)
        [ ] 2 GMB listings - how to claim the one with Jordan's review as our own!
            - https://www.google.com/search?q=dog%20trainers%20reading&sxsrf=ACYBGNTPX1ovT0fYdx-QBHxyFvSFm50tgQ:1578839458957&npsic=0&rflfq=1&rlha=0&rllag=51451081,-920857,5347&tbm=lcl&rldimm=17468382948405453588&ved=2ahUKEwjp7O6oo_7mAhWJi1wKHYGECMsQvS4wAnoECAsQOg&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:14&rlst=f#rlfi=hd:;si:17468382948405453588;mv:[[51.498229699999996,-0.871199],[51.391396799999995,-1.0647847]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:14
            - https://www.google.co.uk/maps/place/Kim+Potter+Dog+Training/@51.4922039,-0.88224,17z/data=!3m1!4b1!4m5!3m4!1s0x487685940d015beb:0x5a07d81b1df6db19!8m2!3d51.4922039!4d-0.880046
    [ ] Deploy to Netlify
    [x] Google My Business pic
    [ ] Snagging
        [ ] Update copy
```
## Before and After

### Before
    * 159 Requests
    * 6.99 MB
    * 12.83 min Loading time (on 4g, train)

### After
    * N Requests?
    * ?

## Questions for Kim
```
[ ] GMB API Key credentials
[ ] A higher res image (original photo?) of the hero image?
```

## Build Setup for Nuxt

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
