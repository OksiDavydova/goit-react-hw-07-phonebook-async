export const getContactsItems = (state) => state.contacts.items;
export const filterValue = (state) => state.contacts.filter;
export const loadingForList = (state) => state.contacts.loadingForList;
export const loadingForForm = (state) => state.contacts.loadingForForm;
export const loadingForDelete = (state) => state.contacts.loadingForDelete;

//for ContactList
export const getVisibleItems = (state) => {
  const data = getContactsItems(state);
  const filter = filterValue(state);
  if (filter) {
    let normFilter = filter.toLowerCase();
    return data.filter(({ name }) => name.toLowerCase().includes(normFilter));
  } else {
    return data;
  }
};
