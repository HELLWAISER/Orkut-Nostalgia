/* finalidade - ao clicar no botão social ou profissional, fazer a alteração */
function showSection(sectionId) {
  // Esconder todas as seções
  document.querySelectorAll('.tab-content').forEach(function (section) {
    section.style.display = 'none';
  });
  // Mostrar a seção clicada
  document.getElementById(sectionId).style.display = 'block';
}
