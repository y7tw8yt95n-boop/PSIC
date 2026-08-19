from pathlib import Path
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Cuestionario HSPS",
    page_icon="📝",
    layout="centered",
    initial_sidebar_state="collapsed",
)

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

html = Path(__file__).with_name("hsps_form.html").read_text(encoding="utf-8")
components.html(html, height=15000, scrolling=False)
