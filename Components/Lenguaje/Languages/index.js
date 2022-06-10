import i18next from 'i18next'
import english from './ing.json'
import spanish from './es.json'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
    resources: {
       en: {translations: {
        "sesion":"Login",
        "usuario": "User",
        "contra":"Password",
        "entrar":"Submit",
        "login.error":"User/Password incorrect.",
        "menu":"Menu",
        "repair":"Repair Request",
        "rent":"Pay Rent",
        "management":"Contact Management",
        "documents":"My Documents",
        "update":"Update Information",
        "moveout": "Move Out Notice",
        "plumbing":"Plumbing",
        "appliance": "Appliance",
        "ac": "A/C Heater",
        "electrical": "Electrical",
        "other": "Other",
        "documents": "Documents",
        "contract": "Contract",
        "movein":"Move in Sheet",
        "media": "Media",
        "edit": "Personal Information",
        "name": "Name",
        "lastname":"Last Name",
        "phone": "Phone Number",
        "address":"Address",
        "change":"Edit",
        "cancel":"Cancel",
        "select":"Select a category",
        "category":"Category",
        "mensaje":"Message",
        "contactoem":"Emergency Contacts",
       }
    },
       esp: {translations: {
        "sesion":"Sesion",
        "usuario": "Usuario",
        "contra":"Contraseña",
        "entrar": "Ingresar",
        "login.error":"Usuario/Contraseña incorrecto.",
        "menu":"Menú",
        "repair":"Solicitud Reparación",
        "documents":"Mis Documentos",
        "management":"Contactar Administración",
        "rent":"Pagar Renta",
        "update":"Actualizar Información",
        "moveout": "Aviso de Mudanza",
        "plumbing":"Plomería",
        "appliance": "Aparatos",
        "ac": "A/C Calentón",
        "electrical": "Electrico",
        "other": "Otros",
        "documents": "Documentos",
        "contract": "Contrato",
        "movein":"Documento de mudanza",
        "media": "Fotos",
        "edit": "Información Personal",
        "name": "Nombre",
        "lastname":"Apellido",
        "phone": "Número de Teléfono",
        "address":"Dirección",
        "change":"Editar",
        "cancel":"Cancelar",
        "select":"Selecciona una categoría",
        "category":"Categoría",
        "mensaje":"Mensaje",
        "contactoem":"Contactos de Emergencia",
       }
    }
    },
    ns: ["translations"],
    defaultNS: "translations",
    fallbackLng: "en",
    react: {
        useSuspense:false,
    },
});



export default i18next;