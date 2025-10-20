import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <AdSpace />
          </div>

          <h1 className="text-4xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  OutilFacile s'engage à protéger la vie privée de ses utilisateurs. 
                  Cette politique de confidentialité explique comment nous collectons, 
                  utilisons et protégeons vos données personnelles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Données collectées</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  <strong>Données fournies directement :</strong> Lorsque vous utilisez nos outils, 
                  les calculs sont effectués localement dans votre navigateur. Nous ne stockons 
                  pas les données que vous saisissez (poids, taille, montants, etc.).
                </p>
                <p>
                  <strong>Données de navigation :</strong> Nous collectons des données anonymes 
                  sur votre utilisation du site via Google Analytics (pages visitées, durée, 
                  type d'appareil) pour améliorer nos services.
                </p>
                <p>
                  <strong>Cookies :</strong> Nous utilisons des cookies pour le fonctionnement 
                  du site et pour les publicités Google AdSense.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Utilisation des données</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>Les données collectées sont utilisées pour :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Améliorer le fonctionnement et l'ergonomie du site</li>
                  <li>Analyser l'utilisation des outils</li>
                  <li>Afficher des publicités pertinentes via Google AdSense</li>
                  <li>Répondre à vos demandes de contact</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Partage des données</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Nous ne vendons ni ne louons vos données personnelles. Les seuls tiers 
                  ayant accès à vos données sont :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Google Analytics (statistiques anonymisées)</li>
                  <li>Google AdSense (publicités ciblées)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez 
                  désactiver les cookies dans les paramètres de votre navigateur, mais cela 
                  peut affecter certaines fonctionnalités du site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Sécurité</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour protéger 
                  vos données contre tout accès, modification, divulgation ou destruction 
                  non autorisés. Notre site utilise le protocole HTTPS pour sécuriser 
                  les échanges de données.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Vos droits (RGPD)</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit d'opposition au traitement de vos données</li>
                  <li>Droit à la portabilité de vos données</li>
                </ul>
                <p className="mt-3">
                  Pour exercer ces droits, contactez-nous via notre 
                  <a href="/contact" className="text-primary hover:underline ml-1">page de contact</a>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Modifications</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité 
                  à tout moment. Les modifications seront publiées sur cette page avec une 
                  nouvelle date de mise à jour.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Pour toute question concernant cette politique de confidentialité, 
                  contactez-nous à : <strong>contact@outilfacile.fr</strong>
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

export default PolitiqueConfidentialite;
