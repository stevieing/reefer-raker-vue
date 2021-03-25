<template>
  <div>
    <h1>
      Boxes to Move
    </h1>
    <table>
      <tr>
        <th>
          id
        </th>
        <th>
          name
        </th>
        <th>
          barcode
        </th>
      </tr>
      <tr v-for="box in boxes" :key="box.id" data-type="box">
        <td data-type="id">
          {{ box.id }}
        </td>
        <td data-type="name">
          {{ box.name }}
        </td>
        <td data-type="barcode">
          {{ box.barcode }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Boxes from '@/data/boxes.json'

export default {
  name: 'BoxesToMove',
  data() {
    return {
      boxes: Boxes
    }
  }
}
</script>

<style>

</style>