export type LotoPlayReq = {
  selectedNumber: {
    firstField: Array<number>,
    secondField: Array<number>,
    isTicketWon: boolean,
  }
};

export type SelectedNumbersPayload = {
  firstField: Array<number>,
  secondField: Array<number>,
};
