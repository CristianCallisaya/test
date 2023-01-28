<template>
    <div>
   
        <ul v-for="(data, index) in historyP1" :key="index">
          <li v-for="(data1, index) in data.relacion_solicitud">{{data1.relacion_estudiante.esPaterno}}</li>
        </ul>

        <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estudiante</th>
             
              <th>Carta respondida</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(docente, index) in historyData.relacion_solicitud" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ docente.relacion_estudiante.esPaterno }} {{ docente.relacion_estudiante.esMaterno }}</td>
                <td>{{ docente.solFechaAprobar }}</td>
             
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h1>Detalle de las programaciones Primer Panel - Segundo Panel</h1>
        <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estudiante</th>
              <th>Carta respuesta</th>
              <th>Acta entregado</th>
              <th>Carta informe entregado</th>
              <th>Panel</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(docente, index) in historyData.relacion_detalle" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ docente.relacion_estudiante.esPaterno }} {{ docente.relacion_estudiante.esMaterno }}</td>
                <td>
                    <span v-if="docente.fechaCartaProRespuesta == null"><strong>pendiente</strong></span>
                    <span v-else>{{ docente.fechaCartaProRespuesta }}</span>
                     </td>
                <td>
                    <span v-if="docente.fechaActaRespuesta == null"><strong>pendiente</strong></span>
                   <span v-else> {{ docente.fechaActaRespuesta }}</span></td>
                <td>
                    <span v-if="docente.fechaCartaSolInforme == null"><strong>pendiente</strong></span>
                   <span v-else> {{ docente.fechaCartaSolInforme }}</span>
                    </td>
                <td>{{ docente.relacion_programacion.nroPanel }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h1>Detalle de las programaciones Tercer Panel</h1>
    
        <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estudiante</th>
              <th>Carta respuesta</th>
              <th>Acta entregado</th>
              <th>Carta informe entregado</th>
              <th>Panel</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(docente, index) in historyData.relacion_detalle_final" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ docente.relacion_estudiante.esPaterno }} {{ docente.relacion_estudiante.esMaterno }}</td>
                <td>
                    <span v-if="docente.fechaCartaProRespuesta == null"><strong>pendiente</strong></span>
                    <span v-else>{{ docente.fechaCartaProRespuesta }}</span>
                     </td>
                <td>
                    <span v-if="docente.fechaActaRespuesta == null"><strong>pendiente</strong></span>
                   <span v-else> {{ docente.fechaActaRespuesta }}</span></td>
                <td>
                    <span v-if="docente.fechaCartaSolInforme == null"><strong>pendiente</strong></span>
                   <span v-else> {{ docente.fechaCartaSolInforme }}</span>
                    </td>
                <td>{{ docente.relacion_programacion.nroPanel }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {

    computed:{
        ...mapGetters({
            historyData: "getDocente",
            historyP1: "getDocenteP1"
        }),
        
    },

}
</script>
