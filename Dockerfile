FROM node:16-bullseye-slim AS builder

ENV NODE_ENV development

WORKDIR /usr/src/app

COPY src /usr/src/app/src
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
COPY webpack.config.js /usr/src/app/

RUN yarn install --immutable --ignore-scripts
RUN yarn run build
RUN yarn install --production --immutable --ignore-scripts

# Final image
FROM node:16-bullseye-slim

# Project Infos
LABEL name="sfmc-custom-activity-app" \
      version="1.0" \
      maintainer="Guilherme"

# Configure timezone
RUN apt-get update && apt-get install -y \
  tzdata \
  curl \
  && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
  && echo "America/Sao_Paulo" >  /etc/timezone \
  && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV production
ENV TZ 'America/Sao_Paulo'

WORKDIR /usr/src/app

#Copy files
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/package.json /usr/src/app/package.json
COPY --from=builder /usr/src/app/webpack.config.js /usr/src/app/webpack.config.js
COPY --from=builder /usr/src/app/src /usr/src/app/src
COPY --from=builder /usr/src/app/src/modules/discount-code/dist /usr/src/app/public/modules/discount-code-v1
COPY --from=builder /usr/src/app/src/modules/discount-redemption-split/dist /usr/src/app/public/modules/discount-redemption-split-v1

USER node

CMD ["npm", "start"]
