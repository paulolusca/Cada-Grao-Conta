from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.set_viewport_size({"width": 375, "height": 667})
    page.goto("http://localhost:5173")

    # Verify initial state
    page.screenshot(path="jules-scratch/verification/01_initial_state.png")

    # Verify "Dicas" page
    page.get_by_role("button", name="Dicas").click()
    page.screenshot(path="jules-scratch/verification/02_dicas_page.png")

    # Verify "Sobre o Projeto" page
    page.get_by_role("button", name="Sobre").click()
    page.screenshot(path="jules-scratch/verification/03_sobre_page.png")

    browser.close()
