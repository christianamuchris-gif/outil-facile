import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const APropos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <AdSpace />
          </div>

          <h1 className="text-4xl font-bold mb-4">À propos d'OutilFacile</h1>
          <p className="text-muted-foreground mb-8">
            Découvrez notre mission et nos valeurs
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Notre mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                OutilFacile est né d'une volonté simple : rendre accessible à tous des outils 
                pratiques et utiles au quotidien, sans inscription ni frais cachés.
              </p>
              <p>
                Dans un monde numérique où la simplicité et la rapidité sont essentielles, 
                nous proposons une collection d'outils en ligne gratuits et faciles à utiliser 
                pour répondre à vos besoins quotidiens.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Nos valeurs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">🎯 Simplicité</h3>
                  <p className="text-sm text-muted-foreground">
                    Des interfaces intuitives et des outils faciles à utiliser, 
                    sans courbe d'apprentissage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🆓 Gratuité</h3>
                  <p className="text-sm text-muted-foreground">
                    Tous nos outils sont 100% gratuits et accessibles sans inscription.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🔒 Confidentialité</h3>
                  <p className="text-sm text-muted-foreground">
                    Vos données personnelles restent privées. Nous ne collectons pas 
                    d'informations sensibles.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">⚡ Rapidité</h3>
                  <p className="text-sm text-muted-foreground">
                    Des résultats instantanés sans temps d'attente ni publicités intrusives.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Nos outils</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                <strong>Calculateur d'IMC :</strong> Évaluez votre indice de masse corporelle 
                et obtenez des conseils santé personnalisés.
              </p>
              <p>
                <strong>Convertisseur de devises :</strong> Convertissez instantanément entre 
                les principales devises mondiales.
              </p>
              <p>
                <strong>Simulateur de prêt :</strong> Calculez vos mensualités et le coût 
                total de votre emprunt en quelques clics.
              </p>
              <p>
                <strong>Générateur de mot de passe :</strong> Créez des mots de passe 
                sécurisés pour protéger vos comptes en ligne.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Des questions ou des suggestions ? N'hésitez pas à nous contacter via 
                notre <a href="/contact" className="text-primary hover:underline">page de contact</a>.
              </p>
            </CardContent>
          </Card>

          <div className="mt-8">
            <AdSpace />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
