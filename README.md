# TheFractionalCTO.me site

[https://thefractionalcto.me](https://thefractionalcto.me)

A stupid simple Brochure site.

**Backend**: Express \
**FrontEnd**: Plain ol' HTML. No JS frameworks other than some server side help from handlebars. \
**CSS**: Tailwind, and I'm not sure how I feel about it.

## Local Development

```bash
$ yarn
$ yarn dev
```

### Running tailwind compiler locally
```bash
$ yarn tailwind:watch
```

## Production Deployment

Production basically follows these steps:
1. Run `yarn lint` to make sure I didn't screw it up too much.
2. Run `yarn tailwind` to compile the CSS.
3. Build docker image and push it to Docker Hub
4. Update a GCP Cloud Run Service with the new image
