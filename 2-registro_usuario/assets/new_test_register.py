import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
 
import pandas as pd
 
 
 
def test_login(driver, nombre,email, password,telefono):
 
    element0 = driver.find_element(By.ID, "exampleInputNombre")
    print(element0.text)
    element0.click()
    element0.send_keys(nombre)

    element1 = driver.find_element(By.ID, "exampleInputEmail1")
    print(element1.text)
    element1.click()
    element1.send_keys(email)
 
 
    element2 = driver.find_element(By.ID, "exampleInputPassword1")
    print(element2.text)
    element2.click()
    element2.send_keys(password)
    
    element3 = driver.find_element(By.ID, "exampleInputPassword2")
    print(element3.text)
    element3.click()
    element3.send_keys(password)
 

    element4 = driver.find_element(By.ID, "exampleInputTelefono")
    print(element4.text)
    element4.click()
    element4.send_keys(telefono)
     # Pause to see the result

   # Para regionSelect
    element5 = driver.find_element(By.ID, "regionSelect")
    select_region = Select(element5)
    select_region.select_by_visible_text("Región Metropolitana")

    # Para comunaSelect
    element6 = driver.find_element(By.ID, "comunaSelect")
    select_comuna = Select(element6)
    select_comuna.select_by_visible_text("La Florida")

  
    time.sleep(1)  # Pause to see the resul
 
 
    element7 = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    print(element7.text)
    element7.click()
 
 
    alert = driver.switch_to.alert
    print(alert.text)
    assert alert.text == "Formulario validado con éxito."
    time.sleep(3) 
    alert.accept()  # Cierra el alert
    print("Primer caso probado exitosamente. El sistema REGISTRO AL USUARIO CORRECTAMENTE.")
 
 
    time.sleep(1)  # Pause to see the result
 
 
    print("Current URL:")
    print(driver.current_url)
 
 
    time.sleep(3)  # Pause to see the result
 
 
 
if __name__ == "__main__":
    df = pd.read_csv("C:/Users/pv-alumno/FelixO123.github.io/2-registro_usuario/assets/test_data.csv")
    for index, row in df.iterrows():
        nombre = row["nombre"]
        email = row["email"]
        password = row["password"]
        telefono = row["fono"]
        print(f"Testing login for: {email} and password {password}")
 
 
        driver = webdriver.Chrome()  # Or Firefox(), Edge(), etc.
        driver.get("https://felixo123.github.io/2-registro_usuario/index.html")
        test_login(driver,nombre, email, password,telefono)
 
 
        driver.quit()
 
 