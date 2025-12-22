class PopularTags {
    constructor(page) {
        this.page = page;  // Playwright Page object
        this.tagListSelector = '.tag-list a'; // selektor dla wszystkich tagów w popularnych
    }

    // Pobiera wszystkie tagi jako tablicę tekstów
    async getAllTags() {
        return this.page.$$eval(this.tagListSelector, tags =>
            tags.map(tag => tag.textContent.trim())
        );
    }

    // Kliknięcie w tag po nazwie
    async clickTag(tagName) {
        const tag = await this.page.locator(`${this.tagListSelector}:has-text("${tagName}")`);
        await tag.click();
    }

    // Sprawdzenie, czy dany tag istnieje
    async hasTag(tagName) {
        const tags = await this.getAllTags();
        return tags.includes(tagName);
    }
}

module.exports = PopularTags;
