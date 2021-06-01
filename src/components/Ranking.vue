<template>
  <div>
      <h1>Ranking</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Posición</th>
            <th scope="col">Nombre de Usuario</th>
            <th scope="col">Puntaje</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Juan</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>30</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#Tabla{
  width: 130px;
  overflow: auto;
}
</style>