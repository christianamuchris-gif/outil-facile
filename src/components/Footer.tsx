import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">OutilFacile</h3>
            <p className="text-sm text-muted-foreground">
              Des outils simples et gratuits pour faciliter votre quotidien.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Outils</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/calculateur-imc" className="text-muted-foreground hover:text-primary transition-colors">
                  Calculateur IMC
                </Link>
              </li>
              <li>
                <Link to="/convertisseur-devises" className="text-muted-foreground hover:text-primary transition-colors">
                  Convertisseur de devises
                </Link>
              </li>
              <li>
                <Link to="/simulateur-pret" className="text-muted-foreground hover:text-primary transition-colors">
                  Simulateur de prêt
                </Link>
              </li>
              <li>
                <Link to="/generateur-mot-de-passe" className="text-muted-foreground hover:text-primary transition-colors">
                  Générateur de mot de passe
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/conditions-utilisation" className="text-muted-foreground hover:text-primary transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OutilFacile. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
