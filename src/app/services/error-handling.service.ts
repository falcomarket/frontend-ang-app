import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }

  private errorMessages: { [key: number]: string } = {
    400: "Requête malformée. Veuillez vérifier les données envoyées.",
    401: "Vous n'êtes pas autorisé à effectuer cette action.",
    403: "Accès refusé. Vous n'avez pas les droits nécessaires.",
    404: "La ressource demandée n'a pas été trouvée.",
    409: "L'utilisateur avec ce nom existe déjà.",
    500: "Erreur interne du serveur. Veuillez réessayer plus tard."
  };

  getErrorMessage(code: number): string {
    return this.errorMessages[code] || "Une erreur inconnue est survenue.";
  }
}
