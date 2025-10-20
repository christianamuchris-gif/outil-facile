import { Link } from "react-router-dom";
import { Calculator, DollarSign, CreditCard, Key, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdSpace from "@/components/AdSpace";

const Index = () => {
  const tools = [
    {
      title: "Calculateur IMC",
      description: "Calculez votre indice de masse corporelle et obtenez une évaluation de votre santé",
      icon: Calculator,
      path: "/calculateur-imc",
      color: "text-primary",
    },
    {
      title: "Convertisseur de devises",
      description: "Convertissez instantanément entre différentes devises du monde entier",
      icon: DollarSign,
      path: "/convertisseur-devises",
      color: "text-accent",
    },
    {
      title: "Simulateur de prêt",
      description: "Calculez vos mensualités et le coût total de votre emprunt",
      icon: CreditCard,
      path: "/simulateur-pret",
      color: "text-primary",
    },
    {
      title: "Générateur de mot de passe",
      description: "Créez des mots de passe sécurisés et aléatoires en un clic",
      icon: Key,
      path: "/generateur-mot-de-passe",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Outils en ligne gratuits et simples
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Accédez à une collection d'outils pratiques pour faciliter votre quotidien. 
                Calculez, convertissez et générez en toute simplicité.
              </p>
              <AdSpace className="mx-auto" />
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos outils</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Card 
                    key={tool.path} 
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-primary/10 ${tool.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{tool.title}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link to={tool.path}>
                        <Button className="w-full group">
                          Utiliser l'outil
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Pourquoi OutilFacile ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-semibold mb-2">Rapide</h3>
                  <p className="text-sm text-muted-foreground">
                    Des résultats instantanés sans inscription
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="font-semibold mb-2">Sécurisé</h3>
                  <p className="text-sm text-muted-foreground">
                    Vos données restent privées et sécurisées
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💯</div>
                  <h3 className="font-semibold mb-2">Gratuit</h3>
                  <p className="text-sm text-muted-foreground">
                    Tous nos outils sont 100% gratuits
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <AdSpace />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
