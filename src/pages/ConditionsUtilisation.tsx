import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <AdSpace />
          </div>

          <h1 className="text-4xl font-bold mb-4">Conditions d'utilisation</h1>
          <p className="text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptation des conditions</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  En accédant et en utilisant OutilFacile, vous acceptez d'être lié par 
                  ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, 
                  veuillez ne pas utiliser notre site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description du service</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  OutilFacile propose une collection d'outils en ligne gratuits, notamment :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Calculateur d'IMC</li>
                  <li>Convertisseur de devises</li>
                  <li>Simulateur de prêt</li>
                  <li>Générateur de mot de passe</li>
                </ul>
                <p>
                  Ces outils sont fournis à titre informatif et ne constituent pas 
                  des conseils professionnels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Utilisation du service</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>Vous vous engagez à :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Utiliser le site conformément aux lois en vigueur</li>
                  <li>Ne pas tenter de perturber ou compromettre le fonctionnement du site</li>
                  <li>Ne pas utiliser le site à des fins illégales ou non autorisées</li>
                  <li>Respecter les droits de propriété intellectuelle</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Limitation de responsabilité</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  <strong>Précision des résultats :</strong> Les résultats fournis par nos 
                  outils sont fournis à titre indicatif. Nous ne garantissons pas l'exactitude, 
                  l'exhaustivité ou la pertinence de ces résultats.
                </p>
                <p>
                  <strong>Décisions importantes :</strong> Pour toute décision importante 
                  (santé, finances, etc.), nous vous recommandons de consulter un professionnel 
                  qualifié.
                </p>
                <p>
                  <strong>Disponibilité :</strong> Nous ne garantissons pas que le site sera 
                  disponible de manière ininterrompue ou sans erreur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Propriété intellectuelle</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Tous les contenus présents sur OutilFacile (textes, graphiques, logos, 
                  images, code source) sont la propriété d'OutilFacile ou de ses partenaires 
                  et sont protégés par les lois sur la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, distribution ou utilisation sans autorisation 
                  préalable est interdite.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Publicité</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Notre site affiche des publicités via Google AdSense pour financer 
                  la gratuité de nos services. Nous ne sommes pas responsables du contenu 
                  des publicités affichées par des tiers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Liens externes</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Notre site peut contenir des liens vers des sites externes. Nous ne 
                  sommes pas responsables du contenu, des politiques de confidentialité 
                  ou des pratiques de ces sites tiers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Modifications des conditions</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Nous nous réservons le droit de modifier ces conditions d'utilisation 
                  à tout moment. Les modifications prennent effet dès leur publication 
                  sur cette page.
                </p>
                <p>
                  Il est de votre responsabilité de consulter régulièrement ces conditions 
                  pour rester informé des éventuelles modifications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Suspension ou résiliation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Nous nous réservons le droit de suspendre ou de résilier votre accès 
                  au site en cas de violation de ces conditions d'utilisation, sans 
                  préavis ni indemnité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Droit applicable</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Ces conditions d'utilisation sont régies par le droit français. 
                  Tout litige relatif à l'utilisation du site sera soumis à la 
                  compétence exclusive des tribunaux français.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Pour toute question concernant ces conditions d'utilisation, 
                  contactez-nous via notre 
                  <a href="/contact" className="text-primary hover:underline ml-1">page de contact</a>.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <AdSpace />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionsUtilisation;
