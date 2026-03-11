getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
}
getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
}