//Her er en funksjon for å hente én spesifikk kommune:

export const dataService = {
    async getMunicipalityById(id) {
        try {
            const response = await fetch('../data/cities.json');
            const data = await response.json();
            // Finner den kommunen som matcher ID-en i URL-en
            return data.municipalities.find(m => m.id === id);
        } catch (error) {
            console.error("Feil ved henting av kommunedata:", error);
        }
    }
};

