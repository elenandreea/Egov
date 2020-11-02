const xml = function (){
    const seat = document.getElementById("input-seat").value;
    const prenume = document.getElementById("input-first").value
    const nume = document.getElementById("input-last").value
    const cnp = document.getElementById("input-cnp").value
    const sex = document.getElementById("input-sex").value
    const data_nasterii = document.getElementById("input-nastere").value
    const mail = document.getElementById("input-email").value
    const iban = document.getElementById("input-iban").value
    const total = document.getElementById("input-suma").value

    var xw = new XMLWriter('UTF-8');
    xw.formatting = 'indented'; //add indentation and newlines
    xw.indentChar = ' '; // indent with spaces
    xw.indentation = 2; //add 2 spaces per level

    xw.writeStartDocument();
    xw.writeStartElement('user');


    xw.writeStartElement('prenume');
    xw.writeString(prenume)
    xw.writeEndElement();

    xw.writeStartElement('nume');
    xw.writeString(nume)
    xw.writeEndElement();

    xw.writeStartElement('cnp');
    xw.writeString(cnp)
    xw.writeEndElement();


    xw.writeStartElement('sex');
    xw.writeString(sex)
    xw.writeEndElement();

    xw.writeStartElement('data-nasterii');
    xw.writeString(data_nasterii)
    xw.writeEndElement();

    xw.writeStartElement('email');
    xw.writeString(mail)
    xw.writeEndElement();


    xw.writeStartElement('loc');
    xw.writeString(seat)
    xw.writeEndElement();


    xw.writeStartElement('iban');
    xw.writeString(iban)
    xw.writeEndElement();


    xw.writeStartElement('total');
    xw.writeString(total)
    xw.writeEndElement();

    xw.writeEndElement();
    xw.writeEndDocument();

    var asString = "";

    if (typeof XMLSerializer !== 'undefined') {
        asString = new XMLSerializer().serializeToString(xw.getDocument());
    } else {
        asString = xw.getDocument().xml;
    }

    return asString
}

const write_xml = () => {
    const content = xml()
    const a = document.createElement('a');
    const file = new Blob([content], {type: 'text/plain'});

    a.href= URL.createObjectURL(file);
    a.download = 'my-new-file.xml';
    a.click();

    URL.revokeObjectURL(a.href);
};

