import { Article, MainContent, P, Subtitle, Title } from "../../elements/FAQ";
import { ArticleContainer, LandingPageContainer } from "../../elements/LandingPage";
import Footer from "../molecules/Footer";
 
const FAQPage: React.FC = () => {
  return (
    <LandingPageContainer>
      <ArticleContainer>
        <MainContent>
          <Article>
            <Title>Preguntas frecuentes</Title>
            <Subtitle>¿Tengo que depositar dinero?</Subtitle>
            <P>¡Nunca! Platubi solo es un servicio de cálculo en el cual cada usuario agrega "anotaciones" (llamadas registros) en el que indica un tipo de activo y su monto para que la plataforma pueda informarle al usuario a cuánto equivale su patrimonio neto. A nosotros no nos importa si los valores son reales o falsos ya que la plataforma solo existe para que vos tengas noción del tamaño de tu capital en la divisa / criptomoneda que quieras y lo sepas rapidamente solo viendo el número que te proporciona tu panel principal.</P>
            <Subtitle>¿Cómo funciona Platubi?</Subtitle>
            <P>Supongamos que tu patrimonio se compone de 200 USD y 1000 ARS y querés visualizar tu patrimonio en pesos argentinos, la plataforma de Platubi cotiza todos los activos valuados en dólares que tengas registrados y te muestra a vos el total de todos los activos que tengas sumados. En este caso 1000 ARS + (200 * 90) = 28000 ARS.
            </P>
            <Subtitle>¿Y si quiero mi cuenta en pesos pero con dólares cotizados a valor blue?</Subtitle>
            <P>Si una vez agregados tus registros, preferís conocer tu saldo en pesos argentinos y que tus activos valuados en dólares se coticen a precio de dolar blue, solo necesitás seleccionarlo en el ícono de engranaje que se encuentra en tu visualizador de patrimonio.</P>
            {/* <Subtitle>¿Qué sucede si quiero restar de mi patrimonio?</Subtitle>
            <P>En el caso de que quieras restar de tu patrimonio tenés dos maneras: podés simplemente añadir un registro indicando que se trata de una operación de RESTA y automáticamente se te va a descontar de tu patrimonio final, y la otra manera es modificando algún registro que ya tengas, aunque no es muy recomendable ya que podría llevar a confundirte, nosotros te recomendamos la primer forma.</P> */}
          </Article>
          <Article id="tyc">
            <Title>Términos y condiciones.</Title>
            <P>Los presentes Términos y condiciones establecen los términos en que Platubi usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo en el caso que estos Términos y condiciones cambien con el tiempo o sean actualizados, nos aseguraremos de hacérselo saber por medio de un correo electrónico en el caso que posea una cuenta en nuestra plataforma.</P>
            <Subtitle>Información que es recogida</Subtitle>
            <P>Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónico e información demográfica. Los registros que se añadan a su cuenta pueden o no ser utilizados como estadística demográfica pero <strong>siempre serán completamente anónimos</strong>. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.</P>
            <Subtitle>Uso de la información recogida</Subtitle>
            <P>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.</P>
            <P>Platubi está altamente comprometido para cumplir con el compromiso de mantener su información segura.</P>
            <Subtitle>Política de cookies</Subtitle>
            <P>Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y la información obtenida se elimina de forma permanente en un lapso no mayor a 30 días. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</P>
            <Subtitle>Enlaces a terceros</Subtitle>
            <P>Esta web NO contiene enlaces a terceros, a excepción de enlaces que dirigen al perfil de github del creador de Platubi solamente con fines de promoción personal.</P>
            <Subtitle>Control de su información personal</Subtitle>
            <P>En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. En el caso de querer eliminar su cuenta, la misma quedará activa durante 30 días desde el momento en que se complete el formulario de desactivación de cuenta con el fin de agilizar el proceso de volver a su cuenta ante un arrepentimiento. Pasados estos 30 días su cuenta quedará eliminada definitivamente y todos sus datos serán eliminados.</P>
            <P>Platubi no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</P>
            <br />
            <br />
            <P>Platubi se reserva el derecho de cambiar los presentes Términos y Condiciones en cualquier momento sujeto a lo previsto en el primer párrafo.</P>
          </Article>
        </MainContent>
      </ArticleContainer>
      <Footer />
    </LandingPageContainer>
  );
}
 
export default FAQPage;
