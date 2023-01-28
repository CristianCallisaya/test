<template>
  <div>
    <v-container class="grey lighten-5">
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-card-title>Carreras</v-card-title>
          <v-card-text>
            <v-data-table
    :headers="headersCarrera"
    :items="carreras"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Lista de Carreras</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
             Nuevo
            </v-btn>
          </template>
        <v-form v-on:submit.prevent="createCarrera">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="carreraData.carreraNombre"
                      label="Nombre carrera"
                    ></v-text-field>
                    
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="carreraData.correlativo"
                      label="Número de correlativo"
                    ></v-text-field>
                  </v-col>
                 
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="hideDialogNewCarrera"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                type="submit"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        
        </v-dialog>
        <v-dialog
          v-model="dialogUpdateCarrera"
          max-width="500px"
        >

        <v-form v-on:submit.prevent="updateCarrera">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="carreraData.carreraNombre"
                      label="Nombre carrera"
                    ></v-text-field>
                    
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="carreraData.correlativo"
                      label="Número de correlativo"
                    ></v-text-field>
                  </v-col>
                 
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="hideDialogUpdateCarrera"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                type="submit"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteCarrera(item)"
      >
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>
          </v-card-text>
                </v-card>
            </v-col>
            
            <v-col cols="6">
                <v-card>
                    <v-card-title>Modalidades</v-card-title>
                    <v-card-text>
                      <v-data-table
    :headers="headersModalidad"
    :items="modalidades"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Lista de Modalidades</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialogModalidadCreate"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
             Nuevo
            </v-btn>
          </template>
        <v-form v-on:submit.prevent="createModalidad">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="modalidadData.nombreModalidad"
                      label="Nombre de la modalidad"
                    ></v-text-field>
                    
                  </v-col>            
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="hideDialogNewModalidad"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                type="submit"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        
        </v-dialog>
        <v-dialog
          v-model="dialogUpdateModalidad"
          max-width="500px"
        >

        <v-form v-on:submit.prevent="updateModalidad">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="modalidadData.nombreModalidad"
                      label="Nombre carrera"
                    ></v-text-field>      
                  </v-col>        
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="hideDialogUpdateModalidad"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                type="submit"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
        
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editModalidad(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteModalidad(item)"
      >
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import * as carreraService from "../../services/carrera_service";
import * as modalidadService from "../../services/modalidad_service";
  export default {
    data: () => ({
      dialogModalidadCreate: false,
      dialogUpdateCarrera: false,
      dialog: false,
      dialogUpdateModalidad: false,
      headersModalidad: [
        {
          text: 'id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Nombre de la modalidad',
          align: 'start',
          sortable: false,
          value: 'nombreModalidad',
        },

        { text: 'Actions', value: 'action', sortable: false },

      ],
      headersCarrera: [
        {
          text: 'id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Nombre carrera',
          align: 'start',
          sortable: false,
          value: 'carreraNombre',
        },
        {
          text: 'Correlativo',
          align: 'start',
          sortable: false,
          value: 'correlativo',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      carreras: [],
      modalidades: [],

      editedIndex: -1,
      carreraData: {
        carreraNombre: '',
        correlativo: ''
      },
      modalidadData: {
        nombreModalidad: ''
      }
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo registro' : 'Editar registro'
      },
    },

    mounted(){
      this.loadCarreras();
      this.loadModalidades();
    },
    methods: {
    
      loadCarreras: async function  (){
        try {
          const response = await carreraService.loadCarreras();
          this.carreras = response.data;
        
        } catch (error) {
          console.log(error);
        }
      },
      loadModalidades: async function(){
        try {
          const response = await modalidadService.loadModalidades();
          this.modalidades = response.data;
        } catch(error){
          console.log(error);
        }
      },
      editItem (item) {
        this.dialogUpdateCarrera = true;
        this.carreraData  = { ... item }
      },
      editModalidad(item){
        this.dialogUpdateModalidad = true;
        this.modalidadData = { ... item}
      },

     hideDialogNewCarrera(){
      this.dialog = false
     },
     hideDialogUpdateCarrera(){
      this.dialogUpdateCarrera = false
     },
     hideDialogNewModalidad(){
      this.dialogModalidadCreate = false
     },
     hideDialogUpdateModalidad(){
      this.dialogUpdateModalidad = false
     },
      createCarrera: async function () {
      try {
        const formData = new FormData();
        formData.append("carreraNombre",this.carreraData.carreraNombre);
        formData.append("correlativo", this.carreraData.correlativo);
        const response = carreraService.createCarrera(formData);
        this.carreras.unshift(response.data);
        this.carreraData = {
          carreraNombre: "",
          correlativo: ""
        }
        this.loadCarreras();
        this.hideDialogNewCarrera();
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
      },
      updateCarrera: async function () {
      try {
        const formData = new FormData();
        formData.append("carreraNombre", this.carreraData.carreraNombre);
        formData.append("correlativo", this.carreraData.correlativo);
        console.log(formData);
        const response = carreraService.updateCarrera(this.carreraData.id,formData);
        this.carreras.unshift(response.data);
        this.carreraData = {
          carreraNombre: "",
          correlativo: ""
        }
        this.loadCarreras();
        this.dialogUpdateCarrera = false;
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
      },
      deleteCarrera: async function(carrera){
        Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await carreraService.deleteCarrera(carrera.id)
          this.loadCarreras();
          Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
        }
      });
      },
      createModalidad: async function () {
      try {
        const formData = new FormData();
        formData.append("nombreModalidad",this.modalidadData.nombreModalidad);
        const response = modalidadService.createModalidad(formData);
        this.modalidades.unshift(response.data);
        this.modalidadData = {
          nombreModalidad: "",
        }
        this.loadModalidades();
        this.hideDialogNewModalidad();
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
      },
      updateModalidad: async function () {
      try {
        const formData = new FormData();
        formData.append("nombreModalidad", this.modalidadData.nombreModalidad);
        const response = modalidadService.updateModalidad(this.modalidadData.id,formData);
        this.modalidades.unshift(response.data);
        this.modalidadData = {
          nombreModalidad: "",
        }
        this.loadModalidades();
        this.dialogUpdateModalidad = false;
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
      },
      deleteModalidad: async function(modalidad){
        Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await modalidadService.deleteModalidad(modalidad.id)
          this.loadModalidades();
          Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
        }
      });
      },
    },
  }
</script>

<style>

</style>