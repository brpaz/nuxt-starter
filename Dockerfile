
# ====================================
# Build stage
# ====================================
FROM node:18-alpine3.17 as build

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile
COPY . .

RUN yarn build

# ====================================
# Development stage
# ====================================
FROM node:18-alpine3.17 as dev

WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "dev"]

#====================================
# Production stage
# ====================================
FROM node:18-alpine3.17 as production

RUN apk update && apk add dumb-init && adduser -D nuxtuser

USER nuxtuser

WORKDIR /app

# copy the output directory to the /app directory from
# build stage with proper permissions for user nuxt user
COPY --chown=nuxtuser:nuxtuser --from=build /app/.output ./

EXPOSE 3000
# set app host and port . In nuxt 3 this is based on nitor and you can read
#more on this https://nitro.unjs.io/deploy/node#environment-variables
ENV HOST=0.0.0.0 NODE_ENV=production
# start the app with dumb init to spawn the Node.js runtime process
# with signal support
CMD ["dumb-init","node","/app/server/index.mjs"]














# update and install the latest dependencies
# Add non root user to the docker image and set the user
RUN apk update && apk upgrade && adduser -D nuxtuser

USER nuxtuser

# set work dir as app
WORKDIR /app
# copy the nuxt project content with proper permission for the user nuxtuser
COPY --chown=nuxtuser:nuxtuser . /app
# COPY . ./
# install all the project npm dependencies
# build the nuxt project to generate the artifacts in .output directory
RUN npm install && npx nuxt build

