## Architecture

This architecture is being created by Nischal Dahal<https://nischal-dahal.com.np>.

Todo:

- [ ] Add authentication & roles
- [ ] Add logging
- [ ] Add error handling
- [ ] Add validation
- [ ] Add testing
- [ ] Add CI/CD
- [ ] Add caching
- [ ] Add queuing
- [ ] Add rate limiting
- [ ] Add validation
- [ ] Add monitoring
- [ ] Add documentation

Todo Features:

- [ ] Add user management
- [ ] Add role management
- [ ] Add permission management
- [ ] Add tenant management (multi-tenancy)
- [ ] Add organization management
- [ ] Add project management
- [ ] Add task management
- [ ] Add issue management
- [ ] Add comment management
- [ ] Add notification management
- [ ] Add attachment management
- [ ] Add file management

Impl:

- [ ] aws
- [ ] firebase
- [ ] elasticsearch
- [ ] otp
- [ ] mail templates
- [ ] mail
- [ ] others

Devops:

- [ ] actions
- [ ] infra ( terraform , ingress, loadbalancer, etc )
- [ ] kubernetes
- [ ] docker
- [ ] caddy

Future:

- [ ] data-migration
- [ ] schedulers

Let's understand a module of this project,

suppose we have a module called user, and it has the following files:

- user.module.ts
- user.controller.ts
- user.service.ts
- user.repository.ts
- /dto
  - index.ts
  - create-user.dto.ts
  - update-user.dto.ts
  - user-response.dto.ts
  - user-list-response.dto.ts
  - user-list-query.dto.ts
- /entity
  - index.ts
  - user.entity.ts
- /schema
  - index.ts
  - user.schema.ts
- /interface
  - index.ts
  - user.interface.ts
- /enum
  - index.ts
  - user.enum.ts
- /constants
  - index.ts
  - user.constants.ts
- /utils

  - index.ts
  - user.utils.ts

- /test

  - index.ts
  - user.spec.ts

- /docs
  - index.ts
  - user.docs.ts

a module should not be interdependent.
