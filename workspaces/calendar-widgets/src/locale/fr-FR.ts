import {Locale} from './types';

export const locale: Locale = {
  locale: 'Anglais (États-Unis)',
  daysOfWeek: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  daysOfWeekFull: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
  today: 'Aujourd\'hui',
  clear: 'Effacer',
  close: 'Fermer',
  firstDay: 0,
  labelMonthNext: 'Mois suivant',
  labelMonthPrev: 'Mois précédent',
  labelMonthSelect: 'Sélectionnez un mois',
  labelYearSelect: 'Sélectionnez une année',
  errorMonth: 'Mois invalide. Le mois doit être compris entre 1 et 12.',
  errorYear: 'Année invalide. L\'année doit être comprise entre 1900 et 2100.',
  errorDay: 'Jour invalide. Le jour doit être compris entre 1 et 31.',
  errorLocale: 'Locale invalide. La locale doit être une chaîne de caractères. Par exemple : "fr-FR".',
  errorOptions: 'Options invalides. Les options doivent être un objet. Voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString pour plus d\'informations.'
};
