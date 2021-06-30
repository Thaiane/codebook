import React from "react"

export const title = "CodeBook"
export const body = (
  <>
    <h1>Olá!</h1>
    <p>
      Boas-vindas ao <b>CodeBook</b>!
    </p>
    <p>
      Aqui você pode aprender os fundamentos básicos de <b>HTML</b> e <b>CSS</b>, tecnologias amplamente 
      utilizadas na construção de páginas <b>web</b> — como esse tutorial :)
    </p>

    <h2>Teoria + Prática = Página</h2>
    <p>A plataforma é dividida em três janelas:</p>

    <table>
      <tbody>
        <tr >
          <td style={{ position: "relative" }}>
            📚 material
            <b style={{ display: "block", position: "absolute", top: "0", right: "3px"  }}>
              &lt; &gt; 
            </b>
          </td>
          <td style={{ color: "#d5d7de", background: "#131417"  }}>⌨️ código</td>
          <td style={{ background: "white"  }}>📰 resultado</td>
        </tr>
      </tbody>
    </table>

    <p>
      Navegando pelas páginas do <b>material</b>, você vai conhecendo os conceitos essenciais da web 
      enquanto pode ir colocando o que aprendeu em prática na janela de <b>código</b> e acompanha 
      o progresso da construção de sua página na janela de <b>resultado</b>.
    </p>

    <p>
      Se quiser salvar seu trabalho, clique no botão EDIT (no canto superior direito) para ter acesso 
      ao <b>CodePen</b>. Crie sua conta e mantenha uma portfólio de páginas web!
    </p>

    <h2>Colabore</h2>
    <p>Caso tenha interesse, você pode fazer parte desse projeto em diferentes frentes:</p>

    <ul>
      <li>revisando o material de ensino;</li>
      <li>adicionando novas páginas ao guia;</li>
      <li>melhorando a usabilidade da plataforma;</li>
      <li>refatorando o código-fonte da app;</li>
      <li>recomendando o CodeBook pra alguém;</li>
      <li>
        contribuindo com{" "}
        <a rel="noreferrer" href={process.env.REACT_APP_FEEDBACK_URL} target="_blank">
          ideias ou feedbacks
        </a>
        !
      </li>
    </ul>

    <p>
      Acesse o{" "}
      <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_CONTRIBUTING_URL}>
        GitHub
      </a>{" "}
      do projeto e saiba como colaborar.
    </p>
  </>
)
