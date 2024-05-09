# Proyecto de Plataforma de Compra y Venta de Coches Clásicos

## Descripción:

Este proyecto busca desarrollar una plataforma que, mediante el uso de scrapping, visualize y centralize ofertas, anuncios y apuestas de coches clásicos.

## Objetivo

El principal objetivo de este proyecto es aprender y poner en practica lo siguiente:

- Uso de testing mediante TDD
- Patrón SOLID
- Patrón Value Object
- Arquitectura hexagonal
- Patrón Criteria
- Programación Funcional
- Uso de código asíncrono
- Scrapping web

> [!IMPORTANT]
> Teniendo en cuenta los objetivos especificados, el backend y los módulos (entidades de dominio, repositorios, casos de uso e implementaciones) del front-end de la aplicación sera a lo que primordialmente se le dará énfasis, dejando a un lado el aspecto visual de la misma.

## Tecnologías utilizadas:

- <strong>Backend</strong>: SpringBoot y NodeJS.
- <strong>Frontend</strong>: Angular con Typescript.
- <strong>Lenguajes</strong>: Java y Javascript.
- <strong>Base de Datos</strong>: MongoDB.
- <strong>DevOps</strong>: Docker usando docker-comnpose.
- <strong>Herramientas de testing</strong>:
  - <strong>Test unitarios en Java</strong>: JUnit y Mockito
  - <strong>Test de intergación en Java</strong>: JUnit y las implementaciones reales de los repositorios (son los tests más lentos).
  - <strong>Test unitarios en Angular</strong>: Jest y Cypress (los test unitarios en el front se testean desde los componentes)
- <strong>Scrapping</strong>: Usando la librería de [Pupeteer](https://pptr.dev/) con NodeJS.

## Funcionalidades:

- [x] Renderizado de todos los coches, con su información detallada.
- [x] Uso del patrón criteria para el filtrado por varios campos (actualmente por marca y precio mínimo de los coches).
- [x] Siguiendo con el patrón criteria, se buscará generar un filtrado por orden ascendente o descendente según precio.
- [x] Mediante el uso de Pupeteer implementar un microservicio de scrapping, para obtener y construir las entidadesde dominio de coches. 
- [ ] Implementar un sistema que permita la comunicación entre el scrapper de NodeJS y el gateway creado en SpringBoot.
- [ ] Al ser una página con interacción de usuarios, se implementaría un sistema de autenticación mediante JWT. Posiblemente haciendo esto en el gateway.
- [ ] Los usuario podrán hacer uso de la funcionalidad de crear, actualizar y eliminar posibles anuncios, que también quedarán renderizadas en la página.

## Recursos 
### Recursos para RabbitMQ
- How to Use RabbitMQ with NodeJS to Send and Receive Messages [FreeCodeCamp](https://www.freecodecamp.org/news/how-to-use-rabbitmq-with-nodejs/)
- How to Consume/Publish RabbitMQ queue in NodeJS [Medium](https://medium.com/@rafael.guzman/how-to-consume-publish-rabbitmq-message-in-nodejs-cb68b5a6484c)
