import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import { toast } from "sonner";

const SimulateurPret = () => {
  const [montant, setMontant] = useState("");
  const [duree, setDuree] = useState("");
  const [taux, setTaux] = useState("");
  const [resultat, setResultat] = useState<{ mensualite: number; coutTotal: number; interets: number } | null>(null);

  const calculerPret = () => {
    const capital = parseFloat(montant);
    const dureeMois = parseFloat(duree);
    const tauxAnnuel = parseFloat(taux);

    if (!capital || !dureeMois || !tauxAnnuel || capital <= 0 || dureeMois <= 0 || tauxAnnuel < 0) {
      toast.error("Veuillez entrer des valeurs valides");
      return;
    }

    const tauxMensuel = tauxAnnuel / 100 / 12;
    
    let mensualite: number;
    if (tauxMensuel === 0) {
      mensualite = capital / dureeMois;
    } else {
      mensualite = capital * (tauxMensuel * Math.pow(1 + tauxMensuel, dureeMois)) / (Math.pow(1 + tauxMensuel, dureeMois) - 1);
    }

    const coutTotal = mensualite * dureeMois;
    const interets = coutTotal - capital;

    setResultat({
      mensualite: Math.round(mensualite * 100) / 100,
      coutTotal: Math.round(coutTotal * 100) / 100,
      interets: Math.round(interets * 100) / 100,
    });
    toast.success("Simulation effectuée");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <AdSpace />
          </div>

          <h1 className="text-4xl font-bold mb-4">Simulateur de prêt</h1>
          <p className="text-muted-foreground mb-8">
            Calculez vos mensualités et le coût total de votre emprunt en quelques clics.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Simuler votre prêt</CardTitle>
              <CardDescription>Entrez les informations de votre emprunt</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="montant">Montant du prêt (€)</Label>
                <Input
                  id="montant"
                  type="number"
                  placeholder="150000"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duree">Durée (mois)</Label>
                  <Input
                    id="duree"
                    type="number"
                    placeholder="240"
                    value={duree}
                    onChange={(e) => setDuree(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taux">Taux d'intérêt annuel (%)</Label>
                  <Input
                    id="taux"
                    type="number"
                    step="0.01"
                    placeholder="2.5"
                    value={taux}
                    onChange={(e) => setTaux(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={calculerPret} className="w-full">
                Calculer mes mensualités
              </Button>

              {resultat && (
                <div className="space-y-4">
                  <div className="p-6 bg-primary/10 rounded-lg space-y-2">
                    <p className="text-sm text-muted-foreground">Mensualité</p>
                    <p className="text-4xl font-bold text-primary">
                      {resultat.mensualite.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Coût total du crédit</p>
                      <p className="text-2xl font-bold">
                        {resultat.coutTotal.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                      </p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Total des intérêts</p>
                      <p className="text-2xl font-bold">
                        {resultat.interets.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Informations importantes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                ⚠️ Ce simulateur fournit une estimation à titre indicatif. Les résultats peuvent varier 
                en fonction des conditions réelles proposées par votre établissement bancaire.
              </p>
              <p>
                💡 N'oubliez pas de prendre en compte les frais annexes : assurance emprunteur, 
                frais de dossier, frais de garantie, etc.
              </p>
              <p>
                📊 Plus la durée du prêt est longue, plus le coût total sera élevé, même si 
                les mensualités sont plus faibles.
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

export default SimulateurPret;
