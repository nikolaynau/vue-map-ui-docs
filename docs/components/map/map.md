# Map

The basic map component.

## Basic usage

<!-- @API -->
<!-- @DATE: Tue, 07 Feb 2023 16:19:03 GMT -->

## Map API

### Map Props

| Prop name | Description                          | Type  | Values | Default         |
| --------- | ------------------------------------ | ----- | ------ | --------------- |
| center    | Initial geographic center of the map | Array | -      | () =&gt; [0, 0] |

### Map Events

| Event name       | Properties                               | Description              |
| ---------------- | ---------------------------------------- | ------------------------ |
| viewport-changed | **center** `number[]` - the center point | Trigger viewport-changed |

### Map Slots

| Name    | Description  | Bindings                                       |
| ------- | ------------ | ---------------------------------------------- |
| default | Default slot |                                                |
| tile    | Tile slot    | **item** `number` - an item passed to the tile |

### Map Exposes

#### ref

> Link to map instance

#### check

> Check map method <br/>`@param` Text to check<br/>`@returns` Result of checking
