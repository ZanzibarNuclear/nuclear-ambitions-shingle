---
title: World of Nuclear System Design
lastUpdated: false
---

# Zanzibar's World of Nuclear Energy

Take a quick tour through the innerworkings of the World of Nuclear.

## System Design

This system diagram shows all of the parts that bring you a great user experience.

![World of Nuclear System Diagram](/images/WoN-Architecture.png)

This is a standard micro-services architecture.

## Clients

You see a browser client on the left. We use NuxtJS, which is an application framework on top of VueJS, which is a Javascript (these days Typescript) library for building Web clients.

We have played with building a mobile-native app for Android, using Kotlin. Supporting a second type of client is possible but not feasible until we have a bit more demand.

Ditto for iOS. Dare to dream, right?

In any case, this archtiecture supports any client with Internet access.

## Services

### WoN Service

This is the main service that handles requests from clients. WoN Service features a RESTful API, with methods that represent entities, and GET, POST, PUT, DELETE methods that map to their lifecycle. It interacts with the Postgres database for persistence. We use Kysely for type-aware data access. WoN Service uses an external service called Resend to deliver email: notifications of key events that merit attention, and magic links for user authentication.

The Robo WoN service is a worker that moderates the Flux forum. It checks WoN service for new posts (a.k.a. fluxes) and asks an AI process (ollama running an open-source large language model) to assess the content. We are looking for violations of the terms of use. Adding more types of agents like this is easy.

A third service is a content delivery network service. As you would expect, this is for delivering static files, mostly images, but also fonts, stylesheets, and anything else that support the app but does not change while the app is running.

### Future

We have an experimenetal Simulation service that is still in the lab. The idea is to run nuclear power plant simulations. Every member will be able to start and care for their own little Nukey. Aww, isn't she cute?

The simulations run very quickly, and could generate a lot of data. If we can make them realistic enough, this would be an interesting source for analytics.

At the moment, they tend to go a little haywire. That doesn't put anyone at risk, of course. It's just weird to see temperatures drop below 0 Celcius in a reactor core.

So, we will keep at it. When the time comes, that kind of service plugs in nicely to the microservices architecture.

## Security

Obviously security is a first-order concern of any application. Although we are not collecting sensitive data per se, in this case, reputation is quite important. Users want to know that someone else cannot act on their behalf. They also want a consistent experience from session to session.

Of course, we have different kinds of users as well with different levels of access. Our admin users can see what members are up to and resolve issues. We wouldn't want to give random users the ability to suspend another user.

The World of Nuclear gives users a choice of authentication methods: OAuth using a favorite identity provider, or getting a magic link in their inbox. Once identity is established, a session token is created and passed between the client and WoN Service using Javascript Web Tokens (JWTs).

Robo WoN uses API keys to authenticate. These are managed by our administrators and provided to the service. Only system users (i.e., non-human) may use API keys to authenticate.

The security system is still simple. The user is assigned one or more roles that define what they are allowed to access. At another angle, some actions are only available to the active user. For example, only a user may update their own profile, regardless of their roles.

Anonymous users are only allowed to view public areas of the application. Areas that require known users or special privilege are guarded at the page level (on the client) and the corresponding actions at the API (on the service).

Database access is limit to WoN Service.

## Environments

The features of WoN are evolving. In order to make changes without disrupting users, we have multiple environments.

### Development

Our laptops are a development playground with lots of development environments. We use git source control to keep from losing anything important.

When we think code is ready for the world, we push to staging.

### Staging

We want to make sure our code works in an environment that is as much like production as possible. Staging services run on a virtual servers in the Cloud. Although staging looks just like production, it uses separate instances of everything. We have staging sub-domains, a staging database, staging client hosting (using Cloudflare).

Once things work in staging, we promote code to production.

### Production

Production runs on servers in the Cloud. It's all out there, supporting happy users.

## Code Repositories

All of our code is available under [ZanzibarNuclear in GitHub](https://github.com/ZanzibarNuclear). Licensing is open and rather permissive. We are depending on the generous efforts of thousands of other software engineers. The least we can do is to work in the open, too. If you like something we are doing, feel free to copy.

What we ask is that you don't set up and run your won World of Nuclear. I mean, why would you? You probably have your own favorite causes to support, right? I thought so.

And if you really want to work on World of Nuclear, we're right here. Contact us, and let's collaborate. contact@nuclearambitions.com
