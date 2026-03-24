export type mockobjectcase = {
  id: number;
  idDueño: number;
  estado: string;
  tipoPaciente: string[];
  edad: number;
  contacto: string[];
  solicitud: string;
  covertura: string;
  franjahoraria: string;
}

export type mockobjectuser = {
  id: number;
  nombre: string;
  email: string;
  phone: string;
  disponible: boolean;
  rangoEtareo: string[];
  image: string;
  profileImage: string;
  rol: "admin" | "usuario" | "profesional"
  estado: "habilitado" | "en espera" | "rechazado";
}

export type mockobjectinfo = {
    id:number;
    idDueño: number;
    title: string;
    subtitle: string[];
    infoText: string[];

    estado: "habilitado" | "en espera" | "rechazado";
}