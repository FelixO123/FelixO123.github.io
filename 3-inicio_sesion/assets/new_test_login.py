import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
 
 
import pandas as pd
 
 
 
def test_login(driver, email, password):
 
 
    element1 = driver.find_element(By.ID, "exampleInputNombre")
    print(element1.text)
    element1.click()
    element1.send_keys(email)
 
 
    element2 = driver.find_element(By.ID, "exampleInputPassword1")
    print(element2.text)
    element2.click()
    element2.send_keys(password)
 
 
    time.sleep(1)  # Pause to see the result
 
 
    element3 = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    print(element3.text)
    element3.click()
 
 
    alert = driver.switch_to.alert
    print(alert.text)
    assert alert.text == "El correo no está registrado"
    alert.accept()  # Cierra el alert
    print("Primer caso probado exitosamente. El sistema NO dejó iniciar sesión.")
 
 
    time.sleep(1)  # Pause to see the result
 
 
    print("Current URL:")
    print(driver.current_url)
 
 
    time.sleep(3)  # Pause to see the result
 
 
 
if __name__ == "__main__":
    df = pd.read_csv("C:/Users/pv-alumno/FelixO123.github.io/3-inicio_sesion/assets/test_data.csv")
    for index, row in df.iterrows():
        email = row["email"]
        password = row["password"]
        print(f"Testing login for: {email} and password {password}")
 
 
        driver = webdriver.Chrome()  # Or Firefox(), Edge(), etc.
        driver.get("https://felixo123.github.io/3-inicio_sesion/index.html")
        test_login(driver, email, password)
 
 
        driver.quit()
 
 