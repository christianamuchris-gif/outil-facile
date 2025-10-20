import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";
import { toast } from "sonner";

const ConvertisseurDevises = () => {
  const [montant, setMontant] = useState("");
  const [deviseDepart, setDeviseDepart] = useState("EUR");
  const [deviseArrivee, setDeviseArrivee] = useState("USD");
  const [resultat, setResultat] = useState<number | null>(null);

  // Taux de change approximatifs (en production, utiliser une API)
  const tauxChange: Record<string, Record<string, number>> = {
    EUR: { USD: 1.09, GBP: 0.86, JPY: 163.5, CHF: 0.95, CAD: 1.48 },
    USD: { EUR: 0.92, GBP: 0.79, JPY: 150.0, CHF: 0.87, CAD: 1.36 },
    GBP: { EUR: 1.16, USD: 1.27, JPY: 190.5, CHF: 1.10, CAD: 1.72 },
    JPY: { EUR: 0.0061, USD: 0.0067, GBP: 0.0052, CHF: 0.0058, CAD: 0.0091 },
    CHF: { EUR: 1.05, USD: 1.15, GBP: 0.91, JPY: 172.4, CAD: 1.56 },
    CAD: { EUR: 0.68, USD: 0.74, GBP: 0.58, JPY: 110.3, CHF: 0.64 },
  };

  const devises = [
    { code: "EUR", nom: "Euro (€)" },
    { code: "USD", nom: "Dollar américain ($)" },
    { code: "GBP", nom: "Livre sterling (£)" },
    { code: "JPY", nom: "Yen japonais (¥)" },
    { code: "CHF", nom: "Franc suisse (CHF)" },
    { code: "CAD", nom: "Dollar canadien (CAD)" },
  ];

  const convertir = () => {
    const montantNum = parseFloat(montant);

    if (!montantNum || montantNum <= 0) {
      toast.error("Veuillez entrer un montant valide");
      return;
    }

    if (deviseDepart === deviseArrivee) {
      setResultat(montantNum);
      toast.info("Les devises sont identiques");
      return;
    }

    const taux = tauxChange[deviseDepart]?.[deviseArrivee] || 1;
    const resultatConversion = montantNum * taux;
    setResultat(Math.round(resultatConversion * 100) / 100);
    toast.success("Conversion effectuée");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <AdSpace />
          </div>

          <h1 className="text-4xl font-bold mb-4">Convertisseur de devises</h1>
          <p className="text-muted-foreground mb-8">
            Convertissez facilement vos montants entre différentes devises mondiales.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Convertir une devise</CardTitle>
              <CardDescription>Entrez le montant et sélectionnez les devises</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="montant">Montant</Label>
                <Input
                  id="montant"
                  type="number"
                  placeholder="100"
                  value={montant}
                  onChange={(e) => setMontant(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>De</Label>
                  <Select value={deviseDepart} onValueChange={setDeviseDepart}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {devises.map((devise) => (
                        <SelectItem key={devise.code} value={devise.code}>
                          {devise.nom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Vers</Label>
                  <Select value={deviseArrivee} onValueChange={setDeviseArrivee}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {devises.map((devise) => (
                        <SelectItem key={devise.code} value={devise.code}>
                          {devise.nom}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={convertir} className="w-full">
                Convertir
              </Button>

              {resultat !== null && (
                <div className="p-6 bg-muted rounded-lg space-y-2">
                  <p className="text-sm text-muted-foreground">Résultat de la conversion</p>
                  <p className="text-4xl font-bold">
                    {resultat.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    {devises.find(d => d.code === deviseArrivee)?.nom}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>À propos des taux de change</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Les taux de change affichés sont fournis à titre indicatif et peuvent varier. 
                Pour des transactions financières importantes, veuillez consulter votre banque 
                ou un service de change professionnel pour obtenir les taux en temps réel.
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

export default ConvertisseurDevises;
