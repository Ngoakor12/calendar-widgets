import {Locale} from './types';

export const locale: Locale = {
  locale: 'Deutsch (Deutschland)',
  daysOfWeek: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  daysOfWeekFull: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  monthsFull: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  today: 'Heute',
  clear: 'Löschen',
  close: 'Schließen',
  firstDay: 1,
  labelMonthNext: 'Nächster Monat',
  labelMonthPrev: 'Vorheriger Monat',
  labelMonthSelect: 'Monat auswählen',
  labelYearSelect: 'Jahr auswählen',
  errorMonth: 'Ungültiger Monat. Monat muss zwischen 1 und 12 liegen.',
  errorYear: 'Ungültiges Jahr. Jahr muss zwischen 1900 und 2100 liegen.',
  errorDay: 'Ungültiger Tag. Tag muss zwischen 1 und 31 liegen.',
  errorLocale: 'Ungültige Locale. Die Locale muss ein String sein. Zum Beispiel: "en-US".',
  errorOptions: 'Ungültige Optionen. Die Optionen müssen ein Objekt sein. Siehe https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString für weitere Informationen.'
};
