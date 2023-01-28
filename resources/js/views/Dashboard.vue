<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
            v-model="buscador"
              @input="loadCombox"
              label="Buscador"
              append-icon="search"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
   
          <v-col cols="12" sm="4"> 
            <v-select
            v-model="comboData"
            @change="loadCombox"
            :items="carreras"
            item-text="carreraNombre"
            item-value="id"
            label="carreras"
            :return-object="false"
            >
            </v-select>
          </v-col>
        </v-row> 
        <div class="text-h5">Lista de estudiantes</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estado</th>
              <th>Estudiante</th>
              <th>Carrera</th>
              <th>Observaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <strong>{{ estudiante.esFinal }}</strong>
              </td>
              <td>
                {{ estudiante.esPaterno }} {{ estudiante.esMaterno }}
                {{ estudiante.esNombres }}
              </td>
              <td>{{ estudiante.relacion_carrera.carreraNombre }}</td>
              <td>
                <v-btn @click="showDialogObs"><v-icon>add_box</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination
          v-model="pagination.current"
          :length="pagination.total"
          @input="onPageChange"
          light
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-container>
    <v-dialog v-model="observacionDialog" max-width="500">
      <v-container>
        <v-card>
          <v-card-title>Agregar observacion</v-card-title>
          <v-card-text>
            <v-row>
              <v-textarea
                background-color="amber lighten-4"
                color="orange orange-darken-4"
                label="Ingrese observacion"
              ></v-textarea>
            </v-row>
            <v-row class="text-center">
              <v-btn color="blue darken-2" dark>Guardar</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-2" dark>Cancelar</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </v-dialog>
    <v-overlay :value="overlay">
     <h1>test</h1>
    </v-overlay>
  </div>
</template>
<script>
import * as estudianteService from "../services/estudiante_service";
import * as carreraService from '../services/carrera_service';
export default {
  data() {
    return {
      overlay: true,
      observacionDialog: false,
      comboData: '',
      pagination: {
        current: 1,
        total: 0,
      },
      buscador: '',
      estudiantes: [],
      carreras: []
    };
  },
  mounted() {
    this.loadEstudiantes();
    this.loadCarreras();
    this.loadCombox();
  },

  methods: {
    loadCarreras: async function(){
      try {
        const response = await carreraService.loadCarreras();
        this.carreras = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.loadEstudiantes(this.comboData,this.pagination.current);
        this.estudiantes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        this.overlay = false;
      } catch (error) {
        console.log(error);
      }
    },
    loadCombox: async function(){
        const response = await estudianteService.filtroEstudianteDash(this.comboData,this.buscador );
        this.estudiantes = response.data.data;
       },

    onPageChange() {
      this.loadEstudiantes();
    },
    showDialogObs() {
      this.observacionDialog = true;
    },
  },
};
</script>
