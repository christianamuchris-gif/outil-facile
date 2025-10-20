import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import { toast } from "sonner";

const CalculateurIMC = () => {
  const [taille, setTaille] = useState("");
  const [poids, setPoids] = useState("");
  const [resultat, setResultat] = useState<{ imc: number; categorie: string; couleur: string } | null>(null);

  const calculerIMC = () => {
    const tailleM = parseFloat(taille) / 100;
    const poidsKg = parseFloat(poids);

    if (!tailleM || !poidsKg || tailleM <= 0 || poidsKg <= 0) {
      toast.error("Veuillez entrer des valeurs valides");
      return;
    }

    const imc = poidsKg / (tailleM * tailleM);
    let categorie = "";
    let couleur = "";

    if (imc < 18.5) {
      categorie = "Insuffisance pondérale";
      couleur = "text-yellow-600";
    } else if (imc < 25) {
      categorie = "Poids normal";
      couleur = "text-accent";
    } else if (imc < 30) {
      categorie = "Surpoids";
      couleur = "text-orange-600";
    } else {
      categorie = "Obésité";
      couleur = "text-destructive";
    }

    setResultat({ imc: Math.round(imc * 10) / 10, categorie, couleur });
    toast.success("IMC calculé avec succès");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <AdSpace />
          </div>

          <h1 className="text-4xl font-bold mb-4">Calculateur d'IMC</h1>
          <p className="text-muted-foreground mb-8">
            L'Indice de Masse Corporelle (IMC) est un indicateur de santé basé sur votre taille et votre poids.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Calculez votre IMC</CardTitle>
              <CardDescription>Entrez votre taille et votre poids pour obtenir votre IMC</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="taille">Taille (cm)</Label>
                  <Input
                    id="taille"
                    type="number"
                    placeholder="170"
                    value={taille}
                    onChange={(e) => setTaille(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="poids">Poids (kg)</Label>
                  <Input
                    id="poids"
                    type="number"
                    placeholder="70"
                    value={poids}
                    onChange={(e) => setPoids(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={calculerIMC} className="w-full">
                Calculer mon IMC
              </Button>

              {resultat && (
                <div className="p-6 bg-muted rounded-lg space-y-2">
                  <p className="text-sm text-muted-foreground">Votre IMC</p>
                  <p className="text-4xl font-bold">{resultat.imc}</p>
                  <p className={`text-lg font-semibold ${resultat.couleur}`}>{resultat.categorie}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Interprétation des résultats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span className="font-medium">IMC &lt; 18.5</span>
                  <span className="text-yellow-700">Insuffisance pondérale</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="font-medium">18.5 ≤ IMC &lt; 25</span>
                  <span className="text-green-700">Poids normal</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <span className="font-medium">25 ≤ IMC &lt; 30</span>
                  <span className="text-orange-700">Surpoids</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span className="font-medium">IMC ≥ 30</span>
                  <span className="text-red-700">Obésité</span>
                </div>
              </div>
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

export default CalculateurIMC;
