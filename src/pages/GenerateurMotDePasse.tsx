import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import { toast } from "sonner";
import { Copy, RefreshCw } from "lucide-react";

const GenerateurMotDePasse = () => {
  const [longueur, setLongueur] = useState("16");
  const [inclureMajuscules, setInclureMajuscules] = useState(true);
  const [inclureMinuscules, setInclureMinuscules] = useState(true);
  const [inclureChiffres, setInclureChiffres] = useState(true);
  const [inclureSymboles, setInclureSymboles] = useState(true);
  const [motDePasse, setMotDePasse] = useState("");

  const genererMotDePasse = () => {
    const longueurNum = parseInt(longueur);

    if (!longueurNum || longueurNum < 4 || longueurNum > 64) {
      toast.error("La longueur doit être entre 4 et 64 caractères");
      return;
    }

    if (!inclureMajuscules && !inclureMinuscules && !inclureChiffres && !inclureSymboles) {
      toast.error("Veuillez sélectionner au moins un type de caractère");
      return;
    }

    let caracteres = "";
    if (inclureMinuscules) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (inclureMajuscules) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (inclureChiffres) caracteres += "0123456789";
    if (inclureSymboles) caracteres += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let resultat = "";
    for (let i = 0; i < longueurNum; i++) {
      resultat += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    setMotDePasse(resultat);
    toast.success("Mot de passe généré");
  };

  const copierMotDePasse = () => {
    if (!motDePasse) {
      toast.error("Aucun mot de passe à copier");
      return;
    }
    navigator.clipboard.writeText(motDePasse);
    toast.success("Mot de passe copié dans le presse-papier");
  };

  const evaluerForce = () => {
    if (!motDePasse) return { force: 0, label: "", color: "" };

    let score = 0;
    if (motDePasse.length >= 8) score++;
    if (motDePasse.length >= 12) score++;
    if (motDePasse.length >= 16) score++;
    if (/[a-z]/.test(motDePasse) && /[A-Z]/.test(motDePasse)) score++;
    if (/[0-9]/.test(motDePasse)) score++;
    if (/[^a-zA-Z0-9]/.test(motDePasse)) score++;

    if (score <= 2) return { force: 33, label: "Faible", color: "bg-destructive" };
    if (score <= 4) return { force: 66, label: "Moyen", color: "bg-yellow-500" };
    return { force: 100, label: "Fort", color: "bg-accent" };
  };

  const force = evaluerForce();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <AdSpace />
          </div>

          <h1 className="text-4xl font-bold mb-4">Générateur de mot de passe</h1>
          <p className="text-muted-foreground mb-8">
            Créez des mots de passe sécurisés et aléatoires pour protéger vos comptes en ligne.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Générer un mot de passe</CardTitle>
              <CardDescription>Personnalisez les options selon vos besoins</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="longueur">Longueur du mot de passe : {longueur} caractères</Label>
                <Input
                  id="longueur"
                  type="range"
                  min="4"
                  max="64"
                  value={longueur}
                  onChange={(e) => setLongueur(e.target.value)}
                  className="cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="majuscules"
                    checked={inclureMajuscules}
                    onCheckedChange={(checked) => setInclureMajuscules(checked as boolean)}
                  />
                  <Label htmlFor="majuscules" className="cursor-pointer">
                    Inclure des majuscules (A-Z)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="minuscules"
                    checked={inclureMinuscules}
                    onCheckedChange={(checked) => setInclureMinuscules(checked as boolean)}
                  />
                  <Label htmlFor="minuscules" className="cursor-pointer">
                    Inclure des minuscules (a-z)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="chiffres"
                    checked={inclureChiffres}
                    onCheckedChange={(checked) => setInclureChiffres(checked as boolean)}
                  />
                  <Label htmlFor="chiffres" className="cursor-pointer">
                    Inclure des chiffres (0-9)
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="symboles"
                    checked={inclureSymboles}
                    onCheckedChange={(checked) => setInclureSymboles(checked as boolean)}
                  />
                  <Label htmlFor="symboles" className="cursor-pointer">
                    Inclure des symboles (!@#$%...)
                  </Label>
                </div>
              </div>

              <Button onClick={genererMotDePasse} className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Générer un mot de passe
              </Button>

              {motDePasse && (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <Label className="text-xs text-muted-foreground mb-2 block">Votre mot de passe</Label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-lg font-mono break-all">{motDePasse}</code>
                      <Button size="icon" variant="ghost" onClick={copierMotDePasse}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Force du mot de passe</span>
                      <span className="font-medium">{force.label}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${force.color}`}
                        style={{ width: `${force.force}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Conseils de sécurité</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>🔒 Utilisez un mot de passe unique pour chaque compte important</p>
              <p>📏 Privilégiez des mots de passe d'au moins 12 caractères</p>
              <p>🔄 Changez vos mots de passe régulièrement, surtout après une fuite de données</p>
              <p>💾 Utilisez un gestionnaire de mots de passe pour les stocker en sécurité</p>
              <p>❌ N'utilisez jamais d'informations personnelles facilement devinables</p>
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

export default GenerateurMotDePasse;
