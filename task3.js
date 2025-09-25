function showLinksInfo() {
  const links = document.getElementsByTagName("a");

  const totalLinks = links.length;

  const firstLink = links[0].href;
  const lastLink = links[links.length - 1].href;

  alert(
    "Número de enlaces: " + totalLinks +
    "\nPrimer enlace: " + firstLink +
    "\nÚltimo enlace: " + lastLink
  );
}
