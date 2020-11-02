const exp = function(ev) {
    const doc = new jsPDF();
    const first = document.getElementById('input-first').value;
    const last = document.getElementById('input-last').value;
    const cnp = document.getElementById('input-cnp').value;
    const iban = document.getElementById('input-iban').value;
    const total = document.getElementById('input-suma').value;
    const tipul_locului = document.getElementById('input-seat').value;
    const today = new Date();
    const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    doc.text(20, 20, "ORDIN DE PLATA");
    doc.text(20, 40, "PLATITOR");
    doc.text(100, 40, first + " " + last);
    doc.text(20, 50, "CNP");
    doc.text(100, 50, cnp);
    doc.text(20, 60, "IBAN PLATITOR");
    doc.text(100, 60, iban);

    doc.text(20, 80, "BENEFICIAR");
    doc.text(100, 80, "TEATRUL NATIONAL BUCURESTI");
    doc.text(20, 90, "IBAN BENEFICIAR");
    doc.text(100, 90, "RO62 TREZ 1315 503X XXXX XXXX");

    doc.text(20, 110, "TOTAL DE PLATA");
    doc.text(100, 110, total);
    doc.text(20, 120, "DATA PLATII");
    doc.text(100, 120, date);
    doc.text(20, 130, "DETALII PLATA");
    doc.text(100, 130, "Bilet Musical " + tipul_locului);

    doc.save('Ordin_de_Plata.pdf');
}