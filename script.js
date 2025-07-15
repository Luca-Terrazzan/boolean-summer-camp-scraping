const companyList = document.getElementById('company-list');

fetch('./lista clienti.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    rows.forEach((row, index) => {
      if (index > 0) { // Skip the header row
        const companyData = row.split(",")
        const company = {
          name: companyData[2],
          vat: companyData[1],
          city: companyData[4],
          address: companyData[5],
          cap: companyData[6],
          phone: companyData[7]
        };

        const companyHTML = `
          <li class="company">
            <span class="company-name">${company.name}</span>
            <span class="company-vat">VAT: ${company.vat}</span>
            <span class="company-address">${company.city}, ${company.address} ${company.cap}</span>
            <span class="company-phone">${company.phone}</span>
          </li>
        `;

        companyList.innerHTML += companyHTML;
      }
    });
  })
  .catch(error => console.error('Error reading CSV file:', error));