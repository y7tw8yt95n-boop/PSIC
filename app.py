from pathlib import Path
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Cuestionario HSPS",
    page_icon="📝",
    layout="centered",
    initial_sidebar_state="collapsed",
)

# Reducimos al mínimo la interfaz propia de Streamlit.
st.markdown(
    '''
    <style>
      header[data-testid="stHeader"] {display:none;}
      footer {display:none;}
      #MainMenu {visibility:hidden;}
      .block-container {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          max-width: 980px;
      }
    </style>
    ''',
    unsafe_allow_html=True,
)

html_path = Path(__file__).with_name("hsps_form.html")
html = html_path.read_text(encoding="utf-8")

# El cuestionario vive dentro de HTML/JavaScript del navegador.
# Las respuestas NO se envían al código Python de Streamlit.
components.html(html, height=9200, scrolling=False)
